import React from 'react';
import './Courses.css';

const Courses = () => {
    const courseList = [
        "Computer Science",
        "Business Administration",
        "Mechanical Engineering",
        "Biology",
        "Mathematics",
        "Psychology",
        "Chemistry",
        "Physics",
        "History",
        "Art & Design",
        "Economics",
        "Information Technology"
    ];

    return (
        <section className="courses">
            <h2>Available Courses</h2>
            <div className="courses-content">
                <div className="left-column">
                    <h3>Core Courses</h3>
                    <ul>
                        {courseList.slice(0, 6).map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>
                <div className="right-column">
                    <h3>Elective Courses</h3>
                    <ul>
                        {courseList.slice(6).map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Courses;
