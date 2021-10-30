import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { InputField } from 'components/FormFields';
import { Student } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';

export interface StudentFormProps {
  initialValues?: Student;
  onSubmit?: (formValues: Student) => void;
}

const StudentForm = ({ initialValues, onSubmit }: StudentFormProps) => {
  const { control, handleSubmit } = useForm<Student>({
    defaultValues: initialValues,
  });

  const handleFormSubmit = (formValues: Student) => {
    console.log('Submit: ', formValues);
  };

  return (
    <Box maxWidth={400}>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="name" label="Full Name" control={control} />
        <InputField name="age" label="Age" control={control} type="number" />
        <InputField name="mark" label="Mark" control={control} type="number" />
        <InputField name="gender" label="Gender" control={control} />
        <InputField name="city" label="City" control={control} />

        <Box mt={3}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default StudentForm;
