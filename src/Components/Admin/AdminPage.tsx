import { Fragment, useState } from "react";
import AdminHeader from "./AdminHeader";
import { Product } from "../../data";
import AdminBoard from "./AdminBoard";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModel";

interface Props {
    savedNewProductData: (newProductData: Product) => void;
    savedEditedProductData: (editedProductData: Product) => void
    deleteProduct: (id: string) => void;
    editProduct: (id: string) => void;
    editProductData: Product[];
    products: Product[];
}

const AdminPage = (props: Props) => {
    const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
    const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);

    const showAddNewProductHandler = () => {
        setIsNewProductModalOpen(true)
    }

    const hideAddNewProductHandler = () => {
        setIsNewProductModalOpen(false)
    }

    const showEditProductHandler = () => {
        setIsEditProductModalOpen(true)
    }

    const hideEditProductHandler = () => {
        setIsEditProductModalOpen(false)
    }

    return (
        <Fragment>
            <AdminHeader />
            <AdminBoard
                products={props.products}
                onShow={showAddNewProductHandler}
                onEdit={showEditProductHandler}
                deleteProduct={props.deleteProduct}
                editProduct={props.editProduct}
            />
            {isNewProductModalOpen && <AddProductModal
                savedNewProductData={props.savedNewProductData}
                onClose={hideAddNewProductHandler}
            />}
            {isEditProductModalOpen && <EditProductModal
                savedEditedProductData={props.savedEditedProductData}
                onClose={hideEditProductHandler}
                editProductData={props.editProductData}
            />}
        </Fragment>
    );
}

export default AdminPage;