import tailwindConfig from '../../../../tailwind.config'
import { BreakpointType, ProjectType } from '@/lib/types';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge'
import resolveConfig from 'tailwindcss/resolveConfig';

const fullConfig = resolveConfig(tailwindConfig)

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getBreakpointWidth = (breakpoint: BreakpointType) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return +fullConfig?.theme?.screens[breakpoint].slice(0, 2)
}

export const getId = () => `id${Math.random().toString(16).slice(2)}`

export const sortByYear = (projects: ProjectType[]) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return projects.sort((a, b) => b.year - a.year)
}

export const removeKey = <T>(object: T, keys: Array<keyof T>) => {
  keys.forEach(field => delete object[field])
}