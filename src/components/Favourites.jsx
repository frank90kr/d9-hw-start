import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const Favourites = () => {
  const preferAgency = useSelector((state) => {
    return state.preferiti.content;
  });
  //   const dispatch = useDispatch();
  return (
    <ListGroup>
      <ListGroup.Item>
        AGENCY:{""}
        {preferAgency.reduce((acc, currentValue) => acc + parseFloat(currentValue.value))}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Favourites;
