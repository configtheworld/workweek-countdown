export default defineEventHandler(async (event) => {
  try {
    // make user login with google
    return {
      user: "john doe",
    };
  } catch (error) {
    console.log(error);

    return createError({
      statusCode: 401,
      message: "Not authenticated",
    });
  }
});
