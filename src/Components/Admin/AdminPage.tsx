import { Fragment, useState} from "react";
import AdminHeader from "./AdminHeader";
import { Product } from "../../data";
import AdminBoard from "./AdminBoard";
import AddProductModal from "./AddProductModal";

interface Props {
    savedNewProductData: (newProductData: Product) => void;
    products: Product[];
}

const AdminPage = (props: Props) => {
    const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);

    const showAddNewProductHandler = () => {
        setIsNewProductModalOpen(true)
      }

      const hideAddNewProductHandler = () => {
        setIsNewProductModalOpen(false)
      }

    return(
        <Fragment>
            <AdminHeader />
            <AdminBoard products={props.products} onShow={showAddNewProductHandler} />
            {isNewProductModalOpen && <AddProductModal savedNewProductData={props.savedNewProductData} onClose={hideAddNewProductHandler} />}
        </Fragment>
    );
}

export default AdminPage;