import * as React from "react";
import Cart from '../components/cart/Cart';
import {Drawer} from "@mui/material";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CartPage: React.FC<Props> = (props) => {


  return (
    <Drawer
      anchor={"right"}
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
    >
      <Cart setIsOpen={props.setIsOpen}/>
    </Drawer>

  );
};
export default CartPage;
