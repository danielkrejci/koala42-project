import { ChevronDown, ChevronUp } from 'react-feather'

interface ToggleButtonProps {
    isExpanded: boolean
    setIsExpanded: (isExpanded: boolean) => void
}

export const ToggleButton = (props: ToggleButtonProps) => {
    return (
        <button className='btn btn-circle bg-transparent border-transparent' onClick={() => props.setIsExpanded(!props.isExpanded)}>
            {props.isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
    )
}
