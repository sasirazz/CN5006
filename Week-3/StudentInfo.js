const dateofBirth ="12/12/1980"

const getStudentName=() =>
{
    return "Write your name";
}
const getCampusName = () =>
{
    return ("UEL Campus")
}

// exporting functions and variable outside the module
exports.getName=getStudentName
exports.Location=getCampusName
exports.dob= dateofBirth
// export function with parameter
exports.Studentgrade =(marks) =>
{
    if (marks>50 && marks <70)
        return ("B grade")
    else
        return ("A grade")
}