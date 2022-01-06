import { StyledButton } from "./style";

const Button = ({ children, className }) => {
    return (
        <StyledButton className={className}>
            {children}
        </StyledButton>
    )
}
export default Button