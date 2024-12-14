function handler(input) {
    const data = Array.isArray(input.data) ? input.data : [];
    return {
      newID: convertToExcelFormat(data),
    };
  }
  
  function convertToExcelFormat(data) {
    let result = [];
  
    data.forEach((user) => {
      // Kiểm tra nếu người dùng có khóa học
      if (user.courses && user.courses.length > 0) {
        // Nếu có khóa học, lặp qua mảng courses để lấy thông tin từng khóa học
        user.courses.forEach((course) => {
          // Tạo một đối tượng chỉ chứa các trường cần thiết
          let formattedRow = {
            code: user.code, 
            userId: course.userId,
            courseId: course.courseId,
            name: course.name,
            certificate: course.certificate,
            graduationDate: formatDate(course.graduationDate),
            createdAt: formatDate(course.createdAt),
            updatedAt: formatDate(course.updatedAt),
          };
          result.push(formattedRow); 
        });
      }
    });
  
    return result; 
  }
  
  function formatDate(dateString) {
    if (!dateString) return null;
  
    try {
      const date = new Date(dateString);
      const timestamp = date.getTime(); // Chuyển ngày tháng sang timestamp
      if (isNaN(timestamp)) {
        throw new Error('Invalid Date');
      }
      return timestamp;
    } catch (error) {
      console.error('Date conversion failed:', dateString);
      return null; 
    }
  }
  