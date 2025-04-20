import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import { useRouter } from "next/router"
import { RiHome3Line } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { Container } from "../container/container";
import Link from "next/link";

export const BreadCrums = () => {
    const router = useRouter();
    const asPath = router.asPath;
    const segments = asPath.split("/")
    const lastsegment = segments[segments.length - 1]
    segments[0] = "acceuil";

    const view = segments.map((path, index) => (
        <div key={uuidv4()} className="flex items-center">
            <Link href={index > 0 ? `/${segments.slice(1, index + 1).join("/")}` : `/`}>
                <Typography
                    variant="caption3"
                    component="span"
                    className={clsx(
                        path !== lastsegment ? "text-gray-600" : "text-gray",
                        "capitalize hover:text-gray animate"
                    )}
                >
                    {path !== "acceuil" ? path.replace(/-/g, " ") : <RiHome3Line className="inline -mt-1" />}

                </Typography>
                {path !== lastsegment && (
                    <Typography
                        variant="caption2"
                        component="span"
                        className="ml-2 text-gray-600 "
                    >
                        /
                    </Typography>
                )}
            </Link>
        </div>
    ));
    return (
        <Container
            className="flex items-center gap-2 py-7">
            {view}
        </Container>
    );
};