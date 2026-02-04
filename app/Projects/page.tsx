import ProjectsIndex from "@/components/SanpecProjects";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects", 
    description: "",
    // other metadata
};
export default function ProjectsPage(){
    return(
      
        <ProjectsIndex/>  
        
    );
}   
