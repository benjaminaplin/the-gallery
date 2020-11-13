import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik';
const host = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '???'

interface Values {
  name: string;
  imageUrl: string;
  type: string;
  size: string;
  views: string;
  isPublished: boolean;
  isAvailable: boolean;
  description: string;
  artistId?: number;
}

const ArtWorkForm = () => {

  const initialValues: Values = {
    name: '',
    imageUrl: '',
    type: '',
    size: '',
    views: '',
    isPublished: false,
    isAvailable: false,
    description: '',
    artistId: null
  }

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Running with scissors blue period" />

          <label htmlFor="imageUrl">Image Url</label>
          <Field id="imageUrl" name="imageUrl" placeholder="www.imageurl.com" />

          <label htmlFor="type">Artwork type</label>
          <Field
            id="type"
            name="type"
            placeholder="sculpture"
          />
          <label htmlFor="size">Size</label>
          <Field
            id="size"
            name="size"
            placeholder="sculpture"
          />
          <label htmlFor="views">Views</label>
          <Field
            id="views"
            name="views"
            placeholder="sculpture"
          />
          <label htmlFor="isPublished">Published</label>
          <Field
            id="isPublished"
            name="isPublished"
            placeholder="published?"
            type="checkbox"
          />
          <label htmlFor="isAvailable">Available</label>
          <Field
            id="isAvailable"
            name="isAvailable"
            placeholder="available?"
            type="checkbox"
          />
          <label htmlFor="description">Description</label>
          <Field
            id="description"
            name="description"
            placeholder="Lorum ipsum"
            type="textarea"
          />
          <label htmlFor="artistId">Artist Id</label>
          <Field
            id="artistId"
            name="artistId"
            placeholder="sculpture"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};


export default ArtWorkForm