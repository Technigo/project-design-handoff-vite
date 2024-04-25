import styled from "styled-components";
import PropTypes from "prop-types";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #1c2996;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 28px;
  height: 28px;
  background: ${(props) => (props.checked ? "#F9CDCC" : "#FFFFFF")};
  border: 2px solid #1c2996;
  transition: all 150ms;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
