
import { Form, FormInput, FormBtn } from "./SearchForm.styled";
import PropTypes from "prop-types";

export const SearchForm = ({ onSubmit }) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        const searchQuery = evt.target.elements.search.value.trim();

        if(searchQuery.length === 0) {
            return alert("Please, enter your request")
        }
        
        onSubmit(searchQuery);

        evt.currentTarget.reset();
    }
   
    return <Form onSubmit={handleSubmit}>
        <FormInput type="text" name="search"/>
        <FormBtn type="submit">Search</FormBtn>
    </Form>
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}