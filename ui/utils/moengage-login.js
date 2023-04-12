const moEngageLogin=async (loginDetails)=>{
    await Moengage.add_unique_user_id(loginDetails.id);
    if (loginDetails.email) await Moengage.add_email(loginDetails.email);
    if (loginDetails.mobile) await Moengage.add_mobile(loginDetails.mobile);
    if (loginDetails.name) await Moengage.add_user_name(loginDetails.name); // Full name for user
    await Moengage.add_user_attribute("User_type", "web");
    await Moengage.track_event(loginDetails.message,loginDetails.data)
    await Moengage.destroy_session();
}

export default moEngageLogin;