import Course from './Coursemain';
// import { courses } from '../mock-data/Mockdata';
import { useEffect, useState } from 'react';
import { useFetch } from '../../useFetch';
function Courselist() {
    // const [courseData, setCourseData] = useState(null);


    // const [courseData, dummy, error] = useFetch('http://localhost:3000/courses'); 
    const [fetchedData, dummy, error] = useFetch('http://localhost:3000/courses');
    // sending url as an argument - since in handle delete we need to set the updated data
    // but in using usefetch we cannot set data there so maintainig a local state when use fetch is available and setting a data there will work
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        if (fetchedData) setCourseData(fetchedData);
    }, [fetchedData]);
    if (!courseData) {
        return <>
            {!error && <img src="/assets/Loading_icon.gif" alt="Loading..." />}
            {error && <p>{error}</p>}
        </>  //error handling
    }

    // courseData.sort((x, y) => x.price - y.price); //sorting fucntion Ascending order lowest to highest
    const valueForMoneyCourses = courseData.filter((course) => course.price <= 350) //filter function
    const courseList = valueForMoneyCourses.map((course) => <Course key={course.id} //map function
        // name={course.name}
        // price={course.price}
        // rating={course.rating}
        // img={course.img}
        // id={course.id}
        // description={course.description}
        course={course}
        handleDeleteCourse={handleDeleteCourse}
    />)
    // console.log(courseList);
    function handleDeleteCourse(id) {
        const updateCourses = courseData.filter((course) => course.id != id);
        setCourseData(updateCourses);
    }
    return (
        // <>
        //     {courseList}
        //     {/* <button onClick={() => { setDummy(false) }}>dummy btn</button> */}
        // </>
        <div className="course-container">
            {courseList}
        </div>
    );
};

export default Courselist;

//npx json-server --watch mock-data/Mockdata.json --port 3000 --static ./mock-data