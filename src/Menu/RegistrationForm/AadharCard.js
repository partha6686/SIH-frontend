import { NavLink } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const AadharCard = () =>{
    return(
        <>
        
        <div class="mb-3">
        <label for="formFileSm" class="form-label">Upload Aadhar Card</label>
        <input class="form-control form-control-sm" id="formFileSm" type="file"/>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
        <NavLink to='/register/registrationform/udidupload/aadharcardupload/incomecftupload'><button class="btn btn-primary" type="button">Upload</button></NavLink>
        </div>
        </>
    );
}
export default AadharCard;