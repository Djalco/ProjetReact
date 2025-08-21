import { Container } from "../container/container";

interface Props {
    children: React.ReactNode;
    
}

export const LayoutOnboarding = ({
    children,
    
}: Props) => {
    return (
        <div className="relative h-screen pb-[91px]">
            <div className="h-full overflow-auto">
                <Container className="grid h-full grid-cols-12">
                       {children}  
                </Container>
            </div>
        </div>
    );
};
