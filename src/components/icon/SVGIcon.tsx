import { SVGProps } from 'react'

function CarbonBlog(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M4 24h10v2H4zm0-6h10v2H4zm22-4H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zM6 6v6h20V6zm20 22h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm-6-8v6h6v-6z"
      ></path>
    </svg>
  )
}

function ArcticonsZohoProjects(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M42.79 12.72L21.55 41.78L3.79 28.79l4.87-6.66l11.1 8.12l16.37-22.4l3.312 2.45l.342.223l-19.167 25.533l-11.687-8.43"
      ></path>
    </svg>
  )
}

function IcBaselineChatBubbleOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"
      ></path>
    </svg>
  )
}

function StreamlineInterfaceHelpQuestionSquareFrameHelpMarkQueryQuestionSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" {...props}>
      <rect
        width="13"
        height="13"
        x=".5"
        y=".5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        rx="1"
      ></rect>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.5 5.5A1.5 1.5 0 1 1 7 7v1"
      ></path>
      <path fill="currentColor" d="M7 9.5a.75.75 0 1 0 .75.75A.76.76 0 0 0 7 9.5Z"></path>
    </svg>
  )
}

const icons = {
  blog: CarbonBlog,
  project: ArcticonsZohoProjects,
  contact: IcBaselineChatBubbleOutline,
  aboutMe: StreamlineInterfaceHelpQuestionSquareFrameHelpMarkQueryQuestionSquare,
}

export interface SVGIconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof icons
}

export function SVGIcon({ name, ...props }: SVGIconProps) {
  const Icon = icons[name]
  if (!Icon) {
    console.warn(`SVG icon "${name}" not found.`)
    return null
  }
  return <Icon {...props} />
}
