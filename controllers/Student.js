import { DATA } from "./StaticData.js";

const getStudent = (req, res) => {

    res.status(200).json({
        success: true,
        data: DATA,
        message: "Data Fetch"
    })
}

const getStudentById = (req, res) => {

    const { id } = req.params;

    let studentIndex = -1;

    studentIndex = DATA.find((stud) => {
        if (stud.id == id)
            return stud;
    })

    if (studentIndex)
        res.status(200).json({ success: true, data: studentIndex, message: "Data Found" })
    else
        res.status(404).json({ success: false, data: studentIndex, message: "Data Not Found" })

}

const postStudent = (req, res) => {
    const { id, name, mobile, bloodGroup } = req.body;

    let StudentIndex = -1;

    StudentIndex = DATA.findIndex((stud) => stud.id == id);

    if (StudentIndex !== -1) {
        return res.status(404).json({
            success: false,
            message: "Please Enter other Id. Id is Exits"
        })
    }

    if (!id || !name) {
        return res.status(400).json({
            success: false,
            message: `Please Enter ${!id ? "Id" : "Name"}`
        })
    }

    if (!bloodGroup || !mobile) {
        return res.status(400).json({
            success: false,
            message: `Please Enter ${!bloodGroup ? "BloodGroup" : "Mobile"} `
        })
    }

    const Objtemp = {
        id,
        name,
        mobile,
        bloodGroup
    }

    DATA.push(Objtemp);

    res.status(200).json({
        success: true,
        message: "Data Add"
    })

}

const deleteStudentById = (req, res) => {

    const { id } = req.params;

    const Dataindex = DATA.findIndex((stud) => {

        if (stud.id == id) {
            return stud;
        }

    })

    // console.log(Dataindex)

    if (Dataindex === -1) {
        return res.status(200).json({
            success: true,
            message: "Data Not Found"
        })
    }

    DATA.splice(Dataindex, 1);

    res.status(200).json({
        success: true,
        message: "Data Deleted"
    })
}

const patchStudentById = (req, res) => {
    const { id } = req.params;

    const { name } = req.body;

    const StudentIndex = DATA.findIndex((student) => {
        if (student.id == id) {
            return student;
        }
    })

    if (StudentIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Data Not Found"
        })
    }

    let d = DATA[StudentIndex];

    d.name = name;

    DATA[StudentIndex] = d;

    res.status(200).json({
        success: true,
        message: "Name Updated "
    })
}

export {
    getStudent, getStudentById, postStudent, deleteStudentById, patchStudentById
}