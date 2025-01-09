import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

import User from "@/models/user";

import { connect } from "@/utils";

connect();
// Calls the connect function to establish a connection to the database.

export async function POST(request: NextRequest) {
  // Defines an asynchronous POST request handler.
  try {
    const reqBody = await request.json();
    const { firstName, lastName, gender, email, password } = reqBody;
    // Parses the request body to extract username, email, and password.

    //Checks if a user with the provided email already exists.
    const user = await User.findOne({ email });

    //If yes, returns a 400 response.
    if (user) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    //hash password using bcryptjs.
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      gender,
      password: hashedPassword,
    });

    // Saves the new user to the database.
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });

    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
