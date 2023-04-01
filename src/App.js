import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CustomeRouter from "./Routes";
import { getAllDepartment } from "./Redux/slice/departmentSlice";
import { getAllEmployee } from "./Redux/slice/employeeSlice";

function App() {
  const dispatch = useDispatch();
  const { isChangeDep } = useSelector(state => state.department);
  const { isChangeEmp } = useSelector(state => state.employee);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoading || isChangeDep || isChangeEmp) {
      dispatch(getAllDepartment());
      dispatch(getAllEmployee());
      setLoading(false);
    }
  }, [isLoading, isChangeDep, isChangeEmp])

  return (
    <React.Fragment>
      {!isLoading && (
        <Router>
          <CustomeRouter />
        </Router>
      )}
    </React.Fragment>
  );
}

export default App;
