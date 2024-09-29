import axios from "axios";

export const me = async () => {
    try {
        // ใส่ await เพื่อรอผลลัพธ์ของ axios.get
        const res = await axios.get("/api/users/me");
        return res.data; // ส่งข้อมูลที่ได้จาก response กลับไป
    } catch (error) {
        // ตรวจสอบและจัดการข้อผิดพลาด
        console.error("Error fetching user data:", error);
        throw error; // ส่งข้อผิดพลาดออกไป เพื่อให้ส่วนอื่นจัดการ
    }
};
