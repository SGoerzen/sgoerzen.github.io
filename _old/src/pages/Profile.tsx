import {HeadBox} from "../components/HeadBox";

import PersonIcon from "@mui/icons-material/Person";
import {Stack} from "@mui/material";
import {ServiceCard} from "../components/ServiceCard";

import ComputerIcon from "@mui/icons-material/Computer";
import React from "react";
import {RequestResume} from "../components/RequestResume";
import {StarDivider} from "../components/StarDivider";
import {Section} from "../components/Section";
import {ResponsiveStack} from "../components/ResponsiveStack";
import {CheckList} from "../components/CheckList";

export const Profile = () => {
    return <>
        <Section>
            <HeadBox icon={PersonIcon} title={"About Me"} text={"I'm John Doe, a Web Designer living and working in Texas, and this is my space on the interwebs. I love to design clean and functional websites for my clients."} />
        </Section>

        <Section>
            <ResponsiveStack direction="row" className="services">
                <ServiceCard icon={ComputerIcon} title="Web Design" text="Proin nec turpis eget dolor dictum lacinia. Nullam nunc magna, tincidunt eu porta in, faucibus sed magna. Suspendisse laoreet ornare ullamcorper. " />
                <ServiceCard icon={ComputerIcon} title="Web Design" text="Proin nec turpis eget dolor dictum lacinia. Nullam nunc magna, tincidunt eu porta in, faucibus sed magna. Suspendisse laoreet ornare ullamcorper. " />
                <ServiceCard icon={ComputerIcon} title="Web Design" text="Proin nec turpis eget dolor dictum lacinia. Nullam nunc magna, tincidunt eu porta in, faucibus sed magna. Suspendisse laoreet ornare ullamcorper. " />
                <ServiceCard icon={ComputerIcon} title="Web Design" text="Proin nec turpis eget dolor dictum lacinia. Nullam nunc magna, tincidunt eu porta in, faucibus sed magna. Suspendisse laoreet ornare ullamcorper. " />
            </ResponsiveStack>
        </Section>

        <Section sx={{textAlign: "center", p: 4}}>
            <RequestResume variant="contained" sx={{p: 2}}>Request Resumé</RequestResume>
        </Section>

        <StarDivider />

        <Section>
            <ResponsiveStack direction="row">
                <CheckList title="My objectives" items={[
                    "Proin nec turpis eget dolor dictum lacinia",
                    "Proin nec turpis eget dolor dictum lacinia",
                    "Proin nec turpis eget dolor dictum lacinia",
                    "Proin nec turpis eget dolor dictum lacinia",
                    "Proin nec turpis eget dolor dictum lacinia",
                    "Proin nec turpis eget dolor dictum lacinia",
                ]} />
            </ResponsiveStack>
        </Section>
    </>
}
