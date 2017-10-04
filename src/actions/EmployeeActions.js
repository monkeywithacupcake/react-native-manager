// employee actions
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { UPDATE_EMPLOYEE, RESET_FORM, EMPLOYEES_FETCH_SUCCESS } from './types';

export const updateEmployee = ({ prop, value }) => {
 return {
     type: UPDATE_EMPLOYEE,
     payload: { prop, value }
 };
};

export const resetForm = () => {
 return {
     type: RESET_FORM
 };
};

export const createEmployee = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                Actions.employeeList({ type: 'reset' });
        });
    };
};

// the firebase on function continuously watches for the data

export const fetchEmployees = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({
                    type: EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
        });
    };
};


export const editEmployee = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                Actions.employeeList({ type: 'reset' });
        });
    };
};

export const deleteEmployee = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.employeeList({ type: 'reset' });
        });
    };
};
