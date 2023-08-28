import movementElementStyle from "./movement-element.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { DropTargetMonitor, useDrag, useDrop } from "react-dnd";
import { TItem } from "../../utils/types/types";

type TConstructorItem = {
  ingredient: TItem;
  id: string;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
};


function MovementElement  ({ ingredient, index, moveItem, id }: TConstructorItem) {
  const { name, price, image } = ingredient;
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const deleteItemAction = (index: number) => dispatch({ type: 'DELETE_ITEM', payload: index });
  const handleDeleteItem = useCallback(() => deleteItemAction(index), [index]);

  const [{ handlerId }, drop] = useDrop({
    accept: 'movementLogic',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: any, monitor: DropTargetMonitor) {
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
      

      const hoverClientY = Number(monitor.getClientOffset()) - hoverBoundingRect.top;

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
      />
    </div>
  );
}

export default MovementElement;

