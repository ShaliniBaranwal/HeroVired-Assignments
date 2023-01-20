import axios from "axios";

const Logout = () => {
    axios.get('/logout');

    return <>You are logged out successfully.</>
};

export default Logout;