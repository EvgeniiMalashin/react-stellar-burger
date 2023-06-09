import movementElementStyle from "./movement-element.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";

function MovementElement({ ingredient, index, moveItem, id }) {
  const { name, price, image } = ingredient;
  const ref = useRef(null);
  const dispatch = useDispatch();
  const deleteItemAction = (index) => dispatch({ type: 'DELETE_ITEM', payload: index });
  const handleDeleteItem = useCallback(() => deleteItemAction(index), [index]);

  const [{ handlerId }, drop] = useDrop({
    accept: 'movementLogic',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()

      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveItem(dragIndex - 1, hoverIndex - 1)
      item.index = hoverIndex
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'movementLogic',
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  drag(drop(ref));

  return (
    <div
      className={movementElementStyle.main} ref={ref} style={{ opacity: Number(!isDragging) }} data-handler-id={handlerId}>
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={handleDeleteItem}
        moveItem={moveItem}
      />
    </div>
  );
}

MovementElement.propTypes = {
  ingredient: ingredientPropType.isRequired,
  index: PropTypes.number.isRequired,
  moveItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default MovementElement;