import React from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Button} from "react-bootstrap";

const RecipeAddForm = ({handleRecipeAdd}) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(1, "Name must be at least 1 character long")
            .required("Name is required"),
        description: Yup.string()
            .min(1, "Description must be at least 1 character long")
            .required("Description is required"),
        ingredients: Yup.string()
            .min(1, "Should be at least one ingredient")
            .required("Ingredients are required"),
        lvl: Yup.number()
            .min(1, "Complexity should be less than 0")
            .max(5, "Complexity should not be more than 5")
            .required("Complexity is required"),
    });

    const initialValues = {
        name: "",
        description: "",
        ingredients: "",
        lvl: ""
    };

    const handleSubmit = async (values, {setSubmitting}) => {
        try {
            await handleRecipeAdd(values);
        } catch (error) {
            console.error("Error adding recipe:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="mt-4">
            <h1>Add Recipe</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({errors, touched, isSubmitting}) => (
                    <Form>
                        <div className="input-wrapper mb-2">
                            <Field
                                className="form-control"
                                name="name"
                                type="string"
                                placeholder="Enter Recipe name"
                            />
                            {errors.name && touched.name && (
                                <div className="error">{errors.name}</div>
                            )}
                        </div>
                        <div className="input-wrapper mb-2">
                            <Field
                                className="form-control"
                                name="description"
                                type="string"
                                placeholder="Enter description"
                            />
                            {errors.description && touched.description && (
                                <div className="error">{errors.description}</div>
                            )}
                        </div>
                        <div className="input-wrapper mb-2">
                            <Field
                                className="form-control"
                                name="ingredients"
                                type="string"
                                placeholder="Enter ingredients sepparated by comma"
                            />
                            {errors.ingredients && touched.ingredients && (
                                <div className="error">{errors.ingredients}</div>
                            )}
                        </div>
                        <div className="input-wrapper mb-2">
                            <Field
                                className="form-control"
                                name="lvl"
                                type="int"
                                placeholder="Enter complexity lvl (1-5)"
                            />
                            {errors.lvl && touched.lvl && (
                                <div className="error">{errors.lvl}</div>
                            )}
                        </div>
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default RecipeAddForm;
