import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employpeeData: [
  {
    avatar: "/images/man.png",
    code: "XXXXXX",
    name: "Employee name",
    department: "Department Name",
    designation: "Designation",
    company: "BSLPL",
    status: "Permanent",
  },
  {
    avatar: "/images/man.png",
    code: "XXXXXX",
    name: "Employee name",
    department: "Department Name",
    designation: "Designation",
    company: "BSLPL",
    status: "Permanent",
  },
  {
    avatar: "/images/man.png",
    code: "XXXXXX",
    name: "Employee name",
    department: "Department Name",
    designation: "Designation",
    company: "Company",
    status: "Probation",
  },
   {
    avatar: "/images/man.png",
    code: "XXXXXX",
    name: "Employee name",
    department: "Department Name",
    designation: "Designation",
    company: "Company",
    status: "Probation",
  }, 
   {
    avatar: "/images/man.png",
    code: "XXXXXX",
    name: "Employee name",
    department: "Department Name",
    designation: "Designation",
    company: "Company",
    status: "Probation",
  },
]
};
        
const employpeeSlice = createSlice({
  name: "employpee",
  initialState,
  reducers: {}
});

export default employpeeSlice.reducer;
