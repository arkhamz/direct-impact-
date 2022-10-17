# General

- Create 3 main page components
- create component for spec filter, vacancy card (for list page)and filter component representing side bar
- Create context to store vacancies, vacancy detail and categories(?)

# Filter related
- create local component state for filtered vacancies
- create local component state for spec filters/checkbox
- create local component state for search term

# spec categories/checkboxes

  - get all the unique values for each spec
  - create an array of unique spec values, array.reduce? Set?
  - create a checkbox for each spec's unique values
  
# How the spec filtering should work

- click checkbox
- handler function (passed by parent) takes in the checkbox/spec value
- if filters array in parent contains this already, remove it from the filters array
- if filters array doesnt contain this, add it to the filters array
- parent use effect should listen for changes in filters array,
- it will filter the jobs and check if object's values include any of the items in the filters array
