import { LayoutOnboarding } from "@/ui/components/layout/layoutOnboarding"
import { OnboardingTabs } from "../../tabs/onboarding-taps"
import { BaseComponentProps } from "@/types/ondoarding-step-list"
import { Typography } from "@/ui/design-system/typography/typography"
//import Image from "next/image"
import { OnboardingFooter } from "../../footer/onboarding-footer"
import { useAuth } from "@/context/AuthUserContext"
import { useToggle } from "@/hooks/use-toggles"
import { UploadAvartar } from "@/ui/components/upload-avatar/upload-avatar"
import { useState } from "react"
import { getDownloadURL, ref, StorageReference, uploadBytesResumable, UploadTask } from "firebase/storage"
import { storage } from "@/config/firebase-config"
import { toast } from "react-toastify"
import { updateUserIdentification } from "@/api/athentification"
import { firestoreUpdateDocument } from "@/api/firestore"

export const AvartarStep = ({ 
    stepList, 
    getCurrentStep, 
    next,
    prev,
    isFirstStep,
    isFinalStep, }: BaseComponentProps) => {
        const {authUser} = useAuth();
        
        const {Value: isLoading, toggle} = useToggle();
        const [selectedImage, setSelectedImage]= useState<File | null>(null)
        const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null)

        const [uploadProgress ,setUploadProgress] = useState<number>(0)

        const handleImageSelect = (e:React.ChangeEvent<HTMLInputElement>)=>{
            const file = e.target.files?.[0];
            console.log("file",file)
            if (file) {
                setSelectedImage(file)

                const reader =  new FileReader();
                reader.onload = (e) => {
                    let imageDataUrl: string | ArrayBuffer| null = null;
                    if(e.target){
                        imageDataUrl = e.target.result
                    }
                    setImagePreview(imageDataUrl)
                }
                reader.readAsDataURL(file)
            }
        }

        const updateuserDocument = async (photoURL: string) =>{
            const body= {
                photoURL: photoURL
            }

            await updateUserIdentification(authUser.uid,body)

            const {error} = await firestoreUpdateDocument(
                "users",
                authUser.uid,
                body
            )

            if(error){
                toggle();
                toast.error(error.message)
                return;
            }

            toggle();
            next();
        }

    const handleImageUpload = ()=>{
        let storageRef : StorageReference;
        let uploadTask : UploadTask;

        if(selectedImage !== null){
            toggle()
            storageRef = ref(
                storage,
              `users-medias/${authUser.uid}/avatar/avatar-${authUser.uid}`
            );
            uploadTask = uploadBytesResumable(storageRef, selectedImage)

            uploadTask.on(
                "state_changed", (snapshot)=>{
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100
                    setUploadProgress(progress)
                },
                (error)=>{
                    console.log("error",error);
                    toggle()
                    toast.error("ereur inconnu est survenue")
                },
                ()=>{
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL)=>{
                            updateuserDocument(downloadURL)
                        }
                    );
                }
            )
        }else{
            next()
        }
    }
    return (
        <>
            <LayoutOnboarding>
                <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                    <div className="w-full space-y-5 pb-4.5">
                        <OnboardingTabs
                            tabs={stepList}
                            getCurrentStep={getCurrentStep}
                        />
                        <Typography variant="h1" component="h1">
                            Derniere etapes!!!
                        </Typography>
                        <Typography variant="body-base" component="p" theme="gray">
                            C est sur t as une tete a etre sur Coders 
                            Monkeys! Mais on a besoin de ta plus belle 
                            photot de profil pour que tout le monde puisse 
                            voir a quel point tu es incroyable. Mettre une 
                            photo sympa, c est la garantie de te faire 
                            remarquer et de craquer les developpeurs en quete 
                            de nouveaux contacts. Alors montre-nous ta belle 
                            gueule et rejoins-nous!!!
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center h-full col-span-6">
                    <div className="flex justify-center w-full">
                        <UploadAvartar 
                            handleImageSelect={handleImageSelect}
                            imagePreview={imagePreview}
                            uploadProgress= {uploadProgress}
                            isLoading={isLoading}

                            />
                    </div>
                </div>

            </LayoutOnboarding>
            <OnboardingFooter
                next={handleImageUpload}
                prev={prev}
                isFirstStep={isFirstStep}
                isFinalStep={isFinalStep}
            />
        </>
        
    )
}