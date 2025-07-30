import React from "react";
import "../components/Styles/Blogs2.css";
import BackButton from "../components/BackButton";

function IP1() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Image Processing</h1>
      </div>
      <div className="blog-outside">
            <div className="blog-item">
              <div className="blog-title">
                <h3>Computer Vision</h3>
              </div>
              <div className="blog-text">
                <p style={{ textAlign: "left" }}>
                  <b>Computer Vision</b>
                  <br />
                  As humans, we are remarkably good at visual data compared to
                  textual data. For example, if I give you a detailed
                  description of the facial features of a person, it will be
                  hard for you to visualize his image and remember it, but If I
                  show you the picture of his face, you will be able to
                  visualize his face and remember it in seconds! Human vision is
                  amazingly beautiful and complex. It is far more advanced than
                  any computer algorithm ever written.
                  <br />
                  <img
                    src="/assets/Blogs/8-1.jpg"
                    alt="Computer vision human"
                    width="50%"
                  />
                  <br />
                  Fig1
                  <br />
                  But unlike humans, computers can't understand visual data,
                  they are very good at understanding textual data, even better
                  than us humans! For example, if we tell a computer about the
                  features of an apple, for instance, it is red in color,
                  spherical in shape, etc., it is easy for a computer to
                  understand and remember this data compared to a simple photo
                  of an apple.
                  <br />
                  <br />
                  This makes it very different how humans see the world and
                  computers understand the world. This is the biggest challenge
                  in the field of computer vision!
                  <br />
                  <b>How computers see an image?</b>
                  <br />
                  <img
                    src="/assets/Blogs/8-2.jpg"
                    alt="First Photographic Camera"
                    width="50%"
                  />
                  <br />
                  First Photographic Camera (Fig2)
                  <br />
                  <img
                    src="/assets/Blogs/8-3.jpg"
                    alt="Modern digital camera"
                    width="50%"
                  />
                  <br />
                  Modern digital camera (Fig3)
                  <br />
                  With the help of digital cameras, we have been successful in
                  capturing an image and convert it to a digital format that
                  computers can understand, but this is just the first and
                  probably the easiest part in computer vision, understanding
                  what's in the photo is much more difficult!
                  <br />
                  <img
                    src="/assets/Blogs/8-4.jpg"
                    alt="Flower Example"
                    width="50%"
                  />
                  <br />
                  Fig4
                  <br />
                  Consider this image, our human brains can easily understand
                  that this is a flower in a split second, this is because we
                  already have a million years' worth of evolutionary content of
                  how an image looks from our ancestors and it is all inside our
                  DNA! this data helps us immediately understand what this is.
                  <br />
                  But computers don't have this kind of advantages, to a
                  computer the same image looks like (Fig5), Just a massive
                  array of integer values, which represent the intensities
                  across the color spectrum
                  <br />
                  <img
                    src="/assets/Blogs/8-5.jpg"
                    alt="Matrix of integers"
                    width="50%"
                  />
                  <br />
                  Fig5
                  <br />
                  Now the task of a computer vision algorithm is to understand
                  this matrix of integers how a human brain does, to make this
                  work, we use an algorithm very similar to how a human brain
                  operates, using machine learning. With machine learning, we
                  train the computer with thousands of images of flowers this
                  eventually helps the algorithm understand what those numbers
                  in a specific organization actually represent.
                  <br />
                  As long as we feed enough data to train the model, the
                  algorithm will be able to identify and differentiate any image
                  <br />
                  <img
                    src="/assets/Blogs/8-6.jpg"
                    alt="Machine learning on images"
                    width="50%"
                  />
                  <br />
                  <br />
                  <b>Open Cv</b>
                  <br />
                  OpenCV stands for “Open Source Computer Vision” is a library
                  for computer vision and machine learning software library
                  invented by Intel in 1999.
                  <br />
                  OpenCV has C++, Python, Java, and MATLAB interfaces and
                  supports Windows, Linux, Android, and Mac OS. OpenCV has been
                  written natively in C++.
                  <br />
                  <br />
                  <b>OpenCv installation:</b>
                  <br />
                  You can install OpenCv using pip package manager in python
                  <br />
                  pip install opencv-python
                  <br />
                  To check if the installation is successful or not, run the
                  following script
                  <br />
                  import cv2
                  <br />
                  cv2.__version__
                  <br />
                  <br />
                  <b>Typical tasks in computer vision</b>
                  <br />
                  <br />
                  1. Image classification:
                  <br />
                  This involves categorizing a given image into one of the many
                  predefined categories in a model. For example, let us consider
                  a binary classification of two categories
                  <br />
                  i. Tourist spot
                  <br />
                  ii. Not a tourist spot
                  <br />
                  <img
                    src="/assets/Blogs/8-7.jpg"
                    alt="Classification example"
                    width="50%"
                  />
                  <br />
                  If an image of Eiffel Tower is given to the model, It should
                  be classified into category-I (Tourist spot), and if an image
                  of a regular house is given to the model, it should be
                  classified into category-II (Not a tourist spot).
                  <br />
                  <br />
                  2. Image localization:
                  <br />
                  Now let us consider the same example of an image of Eiffel
                  Tower, now our goal is to identify where exactly the Eiffel
                  Tower is located in a given image. This is image localization
                  <br />
                  <img
                    src="/assets/Blogs/8-8.jpg"
                    alt="Localization example"
                    width="50%"
                  />
                  <br />
                  <br />
                  3. Object Detection:
                  <br />
                  This is mainly used in self driving cars and other autonomous
                  robots. The goal here is to detect each and every object in a
                  frame of image and to categorize them, for example a car, a
                  pedestrian, a billboard, a traffic signal, a road sign, etc.
                  <br />
                  <img
                    src="/assets/Blogs/8-9.jpg"
                    alt="Object detection"
                    width="50%"
                  />
                  <br />
                  <br />
                  4. Object Identification
                  <br />
                  This is slightly different from object detection, the goal
                  here is to determine whether a specific object appears in an
                  image or not. Given an image of a car and a picture of
                  traffic, the algorithm tells whether the car is present in the
                  picture of traffic.
                  <br />
                  <br />
                  5. Object tracking:
                  <br />
                  The purpose of object tracking is to track an object that is
                  in motion over time, utilizing consecutive video frames as the
                  input. This algorithm is performed on a series of frames or a
                  video, the goal here is to track the movement of a specific
                  object in a series of frames, mostly used in self-following
                  drones, etc.
                  <br />
                  <img
                    src="/assets/Blogs/8-10.gif"
                    alt="Object tracking animation"
                    width="50%"
                  />
                </p>
              </div>
            </div>

        <BackButton />
      </div>
    </>
  );
}

export default IP1;
