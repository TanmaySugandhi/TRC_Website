import React from "react";
import "../components/Blogs2.css";
import BackButton from "../components/BackButton";

function DL1() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Deep Learning</h1>
      </div>
      <div className="blog-outside">
            <div className="blog-item">
              <div className="blog-title">
                <h3>Deep Learning</h3>
              </div>
              <div className="blog-text">
                <p style={{ textAlign: "left" }}>
                  <b>WHAT IS DEEP LEARNING?</b>
                  <br />
                  <br />
                  <img src="/assets/Blogs/6-1.jpg" alt="Overview of AI" />
                  <br />
                  Fig1: Overview of AI
                  <br />
                  Deep learning is a subset of machine learning and it is a
                  class of machine learning algorithms that use a cascade of
                  layers of processing units or multilayer neural networks to
                  extract features from data.
                  <br />
                  <br />
                  <img src="/assets/Blogs/6-2.jpg" alt="Deep overview of AI" />
                  <br />
                  Fig2: Deep overview of AI
                  <br />
                  The Artificial Intelligence has two subsets, they are machine
                  learning and deep learning. Deep learning is a sort of
                  representation learning and it also comes under the kind of
                  machine learning. Few popular examples of respective subsets
                  were labelled in the fig2 and some of the famous examples like
                  computer vision, speech and audio processing, NLP and many
                  more. MLP is Multi-Layer Perceptron.
                  <br />
                  <br />
                  <b>WHY DEEP LEARNING?</b>
                  <br />
                  The two main concepts of deep learning for computer vision are
                  convolutional neural networks and backpropagation. These two
                  were already well understood by researchers in 1989 and
                  backpropagation was not understood by many people in those
                  days. After few years, The Long Short-Term Memory (LTSM)
                  algorithm, which is a basic fundamental to deep learning for
                  timeseries, was developed in 1997. Using deep learning, cats
                  can be classified from images, blurred images, humans can be
                  classified as male or female from images, birds can be
                  differentiated from aeroplanes and many more through neural
                  networks in deep learning.
                  <br />
                  <img
                    src="/assets/Blogs/6-3.jpg"
                    alt="Deep Learning Examples"
                  />
                  <br />
                  Fig3
                  <br />
                  <b>WHAT DEEP LEARNING HAS ACHIEVED SO FAR</b>
                  <br />
                  • Near-human-level image classification
                  <br />
                  • Near-human-level speech recognition
                  <br />
                  • Near-human-level handwriting transcription
                  <br />
                  • Improved machine translation
                  <br />
                  • Improved text-to-speech conversion
                  <br />
                  • Digital assistants such as Google Now and Amazon Alexa
                  <br />
                  • Near-human-level autonomous driving
                  <br />
                  • Improved search results on the web
                  <br />
                  (source: Information from the book by Francois Chollet)
                  <br />
                  <br />
                  <b>WHAT IS A NEURAL NETWORK?</b>
                  <br />
                  In deep learning, the layered representations are learned via
                  models are called neural networks. A neural network has an
                  input layer, output layer and the number of intermediate
                  layers will depend on the user application.
                  <br />
                  <img
                    src="/assets/Blogs/6-4.jpg"
                    alt="Logical Computations with Neurons"
                  />
                  <br />
                  Fig4: Logical Computations with Neurons
                  <br />
                  This is a different artificial neuron called a threshold logic
                  unit (TLU) or also known as linear threshold unit (LTU). The
                  TLU computes a weighted sum of its inputs (z = w1 x1 + w2 x2 +
                  ⋯ + wn xn = xT w), then applies a step function to that sum
                  and outputs the result: hw(x) = step(z), where z = xT w.
                  <br />
                  <img src="/assets/Blogs/6-5.jpg" alt="Threshold Logic Unit" />
                  <br />
                  Fig5: Threshold Logic Unit
                  <br />
                  This is an artificial neural network with an input layer,
                  output layer and one hidden layer. This was also called as
                  neural network with single hidden layer.
                  <br />
                  EX: Perceptron
                  <br />
                  <img
                    src="/assets/Blogs/6-6.jpg"
                    alt="Neural Network with single Hidden layer"
                  />
                  <br />
                  Fig6: Neural Network with single Hidden layer
                  <br />
                  This is a multi-layer artificial neural network with an input
                  layer, output layer and many hidden layers. This was also
                  called as Deep Neural Network or neural network with many
                  hidden layers.
                  <br />
                  EX: CNN.
                  <br />
                  <img src="/assets/Blogs/6-7.jpg" alt="Deep Neural Network" />
                  <br />
                  Fig7: Deep Neural Network
                  <br />
                  <br />
                  <b>THREE REASONS TO GO DEEP:</b>
                  <br />
                  The three main reasons of going to deep learning are
                  <br />
                  • Datasets and benchmarks
                  <br />
                  • Algorithmic advances
                  <br />
                  • Hardware
                  <br />
                  DATA:
                  <br />
                  If deep learning is the vehicle of this revolution, then fuel
                  is the data. Now a days no one can do anything without data,
                  for ex: large companies work with very large image datasets,
                  video datasets, and natural language datasets that could have
                  been collected from the own company that is other than the
                  required data from internet. Generally, the datasets can be
                  stored in cloud and databases of the company. These
                  User-generated image tags on Flickr, for instance, have been
                  the best data for computer vision. Wikipedia is one of the
                  best key dataset for natural language processing (NLP).
                  <br />
                  <br />
                  <b>ALGORITHMS:</b>
                  <br />
                  Until the late 2000s, neural networks were still fairly
                  shallow, using one or two or more layers of representations;
                  such as support vector machines (SVM) and random forests.
                  <br />
                  Around 2009-2010 people used to train neural networks with
                  many number of layers increased and better gradient
                  propagation improved.
                  <br />
                  • Better activation functions for neural layers.
                  <br />
                  • Better weight-initialization schemes.
                  <br />
                  • Better optimization schemes such as RMSProp.
                  <br />
                  Algorithms of deep learning include Simplicity, Scalability,
                  Versatility and Reusability.
                  <br />
                  <br />
                  <b>HARDWARE:</b>
                  <br />
                  Between 1990 and 2010, CPUs became faster by a factor of
                  approximately 5000. Nowadays it’s possible to run small
                  deep-learning models. Typical deep learning models used in
                  computer vision need more computational power like GPUs
                  holding NVIDIA and AMD. Large companies train deep-learning
                  models on clusters of hundreds of GPUs of a type developed for
                  the needs of deep learning, such as NVIDIA Tesla K80. (source:
                  deep learning with python by Francois Chollet).
                  <br />
                  <img
                    src="/assets/Blogs/6-8.jpg"
                    alt="Deep Learning Hardware"
                  />
                  <br />
                  <br />
                  <b>YOUR CHOICE OF DEEP NET:</b>
                  <br />
                  Generally, people who are in the deep learning field first try
                  to understand their problem, they search for data, and the
                  estimation of the neural network layers, inputs and desired
                  output. Finally, they chose algorithms. So, if you don’t know
                  the choice of choosing deep net then I am here to help you.
                  <br />
                  1. If user have an unlabelled data of unsupervised learning,
                  then:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Required
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Your choice
                  <br />
                  Feature Extraction &nbsp;&nbsp;&nbsp;RBM or Autoencoders
                  <br />
                  Unsupervised Learning &nbsp;&nbsp;&nbsp;RBM or Autoencoders
                  <br />
                  Pattern Recognition &nbsp;&nbsp;&nbsp;RBM or Autoencoders
                  <br />
                  (RBM: Restricted Boltzmann Machine)
                  <br />
                  <br />
                  2. If user have a labelled data of supervised learning, then:
                  <br />
                  &nbsp;&nbsp;&nbsp;Required
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Choice
                  <br />
                  Text Processing &nbsp;&nbsp;&nbsp;RNTN, RNN
                  <br />
                  Image Recognition &nbsp;&nbsp;&nbsp;DBN, CNN
                  <br />
                  Object Recognition &nbsp;&nbsp;&nbsp;RNTN, CNN
                  <br />
                  Speech Recognition &nbsp;&nbsp;&nbsp;RNN
                  <br />
                  (RNTN: Recursive neural tensor networks, DBN: Deep belief
                  network)
                  <br />
                  <br />
                  3. For more examples
                  <br />
                  • Natural language processing: RNTN or RNN
                  <br />
                  • Classification: MLP/RELU
                  <br />
                  • Time Series Analysis: RNN
                  <br />
                  An old problem - The Vanishing Gradient:
                  <br />
                  To train a neural network over a large set of labelled data,
                  you must continuously compute the difference between the
                  network’s predicted output and the actual output. This
                  difference is called the cost, and the process for training a
                  net is known as backpropagation, or backprop. During backprop,
                  weights and biases are tweaked slightly until the lowest
                  possible cost is achieved. An important aspect of this process
                  is the gradient, which is a measure of how much the cost
                  changes with respect to a change in a weight or bias value.
                  <br />
                  Backprop suffers from a fundamental problem known as the
                  vanishing gradient. During training, the gradient decreases in
                  value back through the net. Because higher gradient values
                  lead to faster training, the layers closest to the input layer
                  take the longest to train. Unfortunately, these initial layers
                  are responsible for detecting the simple patterns in the data,
                  while the later layers help to combine the simple patterns
                  into complex patterns. Without properly detecting simple
                  patterns, a deep net will not have the building blocks
                  necessary to handle the complexity. This problem is the
                  equivalent of trying to build a house without the proper
                  foundation.
                  <br />
                  So, what causes the gradient to decay back through the net?
                  Backprop, as the name suggests, requires the gradient to be
                  calculated first at the output layer, then backwards across
                  the net to the first hidden layer. Each time the gradient is
                  calculated, the net must compute the product of all the
                  previous gradients up to that point. Since all the gradients
                  are fractions between 0 and 1 – and the product of fractions
                  in this range results in a smaller fraction – the gradient
                  continues to shrink.
                  <br />
                  For example, if the first two gradients are one fourth and one
                  third, then the next gradient would be one fourth of one
                  third, which is one twelfth. The following gradient would be
                  one twelfth of one fourth, which is one forty-eighth, and so
                  on. Since the layers near the input layer receive the smallest
                  gradients, the net would take a very long time to train. As a
                  subsequent result, the overall accuracy would suffer.
                  <br />
                  (source: YouTube)
                </p>
              </div>
            </div>
        <BackButton />
      </div>
    </>
  );
}

export default DL1;
