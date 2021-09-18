const mysql = require("mysql2/promise");

const insertionIntoDB1 = async () => {
    const connection = await mysql.createConnection({
        host: "sql5.freesqldatabase.com",
        user: "sql5438198",
        password: "mWAaxlkcEF",
        database: "sql5438198",
        port: 3306,
    });

    try {
        await connection.query(
            "INSERT INTO fitness blogs (id, title, created on, author, category id, likes, dislikes, comments, content) VALUES (0, 'deadlift guide', '2021-09-18', 'Allen Chen', 2, 202, 7, 'very good', 'go hard')"
        );

        console.log("inserted");
    } catch (e) {
        console.log(e);
    }
};

const insertionIntoDB2 = async () => {
    const connection = await mysql.createConnection({
        host: "sql5.freesqldatabase.com",
        user: "sql5438198",
        password: "mWAaxlkcEF",
        database: "sql5438198",
        port: 3306,
    });

    try {
        await connection.query(
            "INSERT INTO test (name, age) VALUES ('Allen Chen', 20)");

        console.log("inserted");
    } catch (e) {
        console.log(e);
    }
};

insertionIntoDB2();