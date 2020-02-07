import styled from "@emotion/styled";

const TableCell = styled.div`
  color: ${props => {
    if (props.heading) {
      return "#E53935";
    } else if (props.selected) {
      return "#fff";
    } else {
      return "#000";
    }
  }};
  font-weight: ${props =>
    props.heading || props.selected || props.selectedTime ? "bold" : "ihnerit"};
  padding: 1rem 0;
  background: ${props => (props.selected ? "#E53935" : "#fff")};
  width: 100%;
  border-bottom: ${props =>
    props.heading ? "1px solid #ddd" : "1px solid #f4f4f4"};
  cursor: ${props => (props.selectable ? "pointer" : "inherit")};
  ${props =>
    props.selectable && !props.selected
      ? `&:hover {
        background: #f2bfbf;}`
      : ``}
`;

export default TableCell;
