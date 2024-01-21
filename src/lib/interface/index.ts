import { ProjectType } from "@/lib/types";

export interface FeaturedProjectType
  extends Omit<ProjectType, "year" | "repo"> {
  description: string;
  repo?: string;
  tasks?: string;
}
