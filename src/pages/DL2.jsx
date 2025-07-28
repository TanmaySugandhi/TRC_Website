import React from "react";
import "../components/Blogs2.css";
import BackButton from "../components/BackButton";

function DL2() {
  return (
    <>
      <div className="team-header">
        <h1 className="team-title">Deep Learning</h1>
      </div>
      <div className="blog-outside">
            <div className="blog-item">
              <div className="blog-title">
                <h3>Deep Learning - 2</h3>
              </div>
              <div className="blog-text">
                <p style={{ textAlign: "left" }}>
                  <b>Restricted Boltzmann Machines:</b>
                  <br />
                  Geoff Hinton of the University of Toronto, a pioneer and giant
                  in the field, was able to devise a method for training deep
                  nets. His work led to the creation of the Restricted Boltzmann
                  Machine, or RBM.
                  <br />
                  Structurally, an RBM is a shallow neural net with just two
                  layers – the visible layer and the hidden layer. In this net,
                  each node connects to every node in the adjacent layer. The
                  “restriction” refers to the fact that no two nodes from the
                  same layer share a connection.
                  <br />
                  <br />
                  The goal of an RBM is to recreate the inputs as accurately as
                  possible. During a forward pass, the inputs are modified by
                  weights and biases and are used to activate the hidden layer.
                  In the next pass, the activations from the hidden layer are
                  modified by weights and biases and sent back to the input
                  layer for activation. At the input layer, the modified
                  activations are viewed as an input reconstruction and compared
                  to the original input. A measure called KL Divergence is used
                  to analyze the accuracy of the net. The training process
                  involves continuously tweaking the weights and biases during
                  both passes until the input is as close as possible to the
                  reconstruction.
                  <br />
                  <br />
                  If you’ve ever worked with an RBM in one of your own projects,
                  please comment and tell me about your experiences.
                  <br />
                  <br />
                  Because RBMs try to reconstruct the input, the data does not
                  have to be labelled. This is important for many real-world
                  applications because most data sets – photos, videos, and
                  sensor signals for example – are unlabelled. By reconstructing
                  the input, the RBM must also decipher the building blocks and
                  patterns that are inherent in the data. Hence the RBM belongs
                  to a family of feature extractors known as auto-encoders.
                  <br />
                  <img src="/assets/Blogs/14-1.jpg" alt="RBM Diagram" />
                  <br />
                  <br />
                  <b>Deep Belief Networks:</b>
                  <br />
                  The Deep Belief Network, or DBN, was also conceived by Geoff
                  Hinton. These powerful nets are believed to be used by Google
                  for their work on the image recognition problem. In terms of
                  structure, a Deep Belief is identical to a Multilayer
                  Perceptron, but structure is where their similarities end – a
                  DBN has a radically different training method which allows it
                  to tackle the vanishing gradient.
                  <br />
                  <br />
                  The method is known as Layer-wise, unsupervised, greedy
                  pre-training. Essentially, the DBN is trained two layers at a
                  time, and these two layers are treated like an RBM. Throughout
                  the net, the hidden layer of an RBM acts as the input layer of
                  the adjacent one. So the first RBM is trained, and its outputs
                  are then used as inputs to the next RBM. This procedure is
                  repeated until the output layer is reached.
                  <br />
                  <br />
                  Have you ever used this method to train a Deep Belief Network?
                  Please comment and let me know your thoughts.
                  <br />
                  <br />
                  After this training process, the DBN is capable of recognizing
                  the inherent patterns in the data. In other words, it’s a
                  sophisticated, multilayer feature extractor. The unique aspect
                  of this type of net is that each layer ends up learning the
                  full input structure. In other types of deep nets, layers
                  generally learn progressively complex patterns – for facial
                  recognition, early layers could detect edges and later layers
                  would combine them to form facial features. On the other hand,
                  a DBN learns the hidden patterns globally, like a camera
                  slowly bringing an image into focus.
                  <br />
                  <br />
                  In the end, a DBN still requires a set of labels to apply to
                  the resulting patterns. As a final step, the DBN is fine-tuned
                  with supervised learning and a small set of labeled examples.
                  After making minor tweaks to the weights and biases, the net
                  will achieve a slight increase in accuracy.
                  <br />
                  <br />
                  This entire process can be completed in a reasonable amount of
                  time using GPUs, and the resulting net is typically very
                  accurate. Thus the DBN is an effective solution to the
                  vanishing gradient problem. As an added real-world bonus, the
                  training process only requires a small set of labelled data.
                  <br />
                  <img src="/assets/Blogs/14-2.jpg" alt="DBN Architecture" />
                  <br />
                  <br />
                  <b>Convolutional Neural Networks:</b>
                  <br />
                  CNNs are deep nets that are used for image, object, and even
                  speech recognition. Pioneered by Yann Lecun at New York
                  University, these nets are currently utilized in the tech
                  industry, such as with Facebook for facial recognition. If you
                  start reading about CNNs you will quickly discover the
                  ImageNet challenge, a project that was started to showcase the
                  state of the art and to help researchers access high-quality
                  image data. Every top Deep Learning team in the world joins
                  the competition, but each time it’s a CNN that ends up taking
                  first place.
                  <br />
                  <br />
                  A CNN tends to be a difficult concept to grasp. If you’ve ever
                  struggled while trying to learn about these nets, please
                  comment and share your experiences.
                  <br />
                  <br />
                  CNNs have multiple types of layers, the first of which is the
                  convolutional layer. To visualize this layer, imagine a set of
                  evenly spaced flashlights all shining directly at a wall.
                  Every flashlight is looking for the exact same pattern through
                  a process called convolution. A flashlight’s area of search is
                  fixed in place, and it is bounded by the individual circle of
                  light cast on the wall. The entire set of flashlights forms
                  one filter, which is able to output location data of the given
                  pattern. A CNN typically uses multiple filters in parallel,
                  each scanning for a different pattern in the image. Thus the
                  entire convolutional layer is a 3-dimensional grid of these
                  flashlights.
                  <br />
                  <br />
                  Connecting some dots
                  <br />- A series of filters forms layer one, called the
                  convolutional layer. The weights and biases in this layer
                  determine the effectiveness of the filtering process.
                  <br />- Each flashlight represents a single neuron. Typically,
                  neurons in a layer activate or fire. On the other hand, in the
                  convolutional layer, neurons search for patterns through
                  convolution. Neurons from different filters search for
                  different patterns, and thus they will process the input
                  differently.
                  <br />- Unlike the nets we've seen thus far where every neuron
                  in a layer is connected to every neuron in the adjacent
                  layers, a CNN has the flashlight effect. A convolutional
                  neuron will only connect to the input neurons that it “shines”
                  upon.
                  <br />
                  <br />
                  The convoluted input is then sent to the next layer for
                  activation. CNNs use backprop for training, but because a
                  special engine called RELU is used for activation, the nets
                  don’t suffer from the vanishing gradient problem.
                  <br />
                  <br />
                  In real world applications, image convolution results in 100s
                  of millions of weights and biases, which has an adverse effect
                  on performance. Thus after RELU, the activations are typically
                  pooled in an adjacent layer to reduce dimensionality.
                  Afterwards, there is usually a fully connected layer that acts
                  as a classifier.
                  <br />
                  <br />
                  CNNs that are in use typically have an architecture with
                  repeated sets of layers. Set 1 is a convolutional layer
                  followed by a RELU. This set can be repeated a few times, and
                  the repeated structure is followed by a pooling layer. This
                  resulting combination forms set 2, which is also repeated a
                  few more times. The final resulting structure is then attached
                  to a fully connected layer at the end. This architecture
                  allows the net to continuously build complex patterns from
                  simple ones, all while lowering computing costs with
                  dimensionality reduction.
                  <br />
                  <br />
                  CNNs are a powerful tool, but there is one drawback – they
                  require 10s of millions of labelled data points for training.
                  They also must be trained with GPUs for the process to be
                  completed in a reasonable amount of time.
                  <br />
                  <img src="/assets/Blogs/14-3.jpg" alt="CNN Example" />
                  <br />
                  <br />
                  <b>Recurrent Neural Networks:</b>
                  <br />
                  The Recurrent Neural Net (RNN) is the brainchild of Juergen
                  Schmidhuber and Sepp Hochreiter. The three deep nets we’ve
                  seen thus far – MLP, DBN, and CNN – are known as feedforward
                  networks since a signal moves in only one direction across the
                  layers. In contrast, RNNs have a feedback loop where the net’s
                  output is fed back into the net along with the next input.
                  Since RNNs have just one layer of neurons, they are
                  structurally one of the simplest types of nets.
                  <br />
                  Like other nets, RNNs receive an input and produce an output.
                  Unlike other nets, the inputs and outputs can come in a
                  sequence. Here are some sample applications for different
                  input-output scenarios:
                  <br />- Single input, sequence of outputs: image captioning
                  <br />- Sequence of inputs, single output: document
                  classification
                  <br />- Sequence of inputs, sequence of outputs: video
                  processing by frame, statistical forecasting of demand in
                  Supply Chain Planning
                  <br />
                  Have you ever used an RNN in one of your projects before? If
                  so, please comment and tell us about your experience.
                  <br />
                  RNNs are trained using backpropagation through time, which
                  reintroduces the vanishing gradient problem. In fact, the
                  problem is worse with an RNN because each time step is the
                  equivalent of a layer in a feedforward net. Thus if the net is
                  trained for 1000 time steps, the gradient will vanish
                  exponentially as it would in a 1000-layer MLP.
                  <br />
                  There are different approaches to address this problem, the
                  most popular of which is gating. Gating takes the output of
                  any time step and the next input, and performs a
                  transformation before feeding the result back into the RNN.
                  There are several types of gates, the LSTM being the most
                  popular. Other approaches to address this problem include
                  gradient clipping, steeper gates, and better optimizers.
                  <br />
                  GPUs are an essential tool for training an RNN. A team at
                  Indico compared the speed boost from using a GPU over a CPU,
                  and found a 250-fold increase. That’s the difference between 1
                  day and over 8 months!
                  <br />
                  A recurrent net has one additional capability – it can predict
                  the next item in a sequence, essentially acting as a
                  forecasting engine.
                  <br />
                  <img src="/assets/Blogs/14-4.jpg" alt="RNN Schema" />
                  <br />
                  <br />
                  <b>Backpropagation:</b>
                  <br />
                  When we use a feedforward neural network to accept an input x
                  and produce an output ^y, information flows forward through
                  the network. The input x provides the initial information that
                  then propagates up to the hidden units at each layer and
                  finally produces ^y. This is called forward propagation.
                  During training, forward propagation can continue onward until
                  it produces a scalar cost J(theta).
                  <br />
                  The back-propagation algorithm (Rumelhart et al., 1986a),
                  often simply called backprop, allows the information from the
                  cost to then flow backward through the network in order to
                  compute the gradient.
                  <br />
                  Computing an analytical expression for the gradient is
                  straightforward, but numerically evaluating such an expression
                  can be computationally expensive. The back-propagation
                  algorithm does so using a simple and inexpensive procedure.
                  <br />
                  <br />
                  The term back-propagation is often misunderstood as meaning
                  the whole learning algorithm for multi-layer neural networks.
                  Actually, back-propagation refers only to the method for
                  computing the gradient, while another algorithm, such as
                  stochastic gradient descent, is used to perform learning using
                  this gradient.
                  <br />
                  Furthermore, back-propagation is often misunderstood as being
                  specific to multi-layer neural networks, but in principle it
                  can compute derivatives of any function (for some functions,
                  the correct response is to report that the derivative of the
                  function is undefined). Specifically, we will describe how to
                  compute the gradient delta(xf(x, y)) for an arbitrary function
                  f, where x is a set of variables whose derivatives are
                  desired, and y is an additional set of variables that are
                  inputs to the function but whose derivatives are not required.
                  <br />
                  In learning algorithms, the gradient we most often require is
                  the gradient of the cost function with respect to the
                  parameters, delta_theta J(theta). Many machine learning tasks
                  involve computing other derivatives, either as part of the
                  learning process, or to analyze the learned model. The
                  back-propagation algorithm can be applied to these tasks as
                  well and is not restricted to computing the gradient of the
                  cost function with respect to the parameters. The idea of
                  computing derivatives by propagating information through a
                  network is very general and can be used to compute values such
                  as the Jacobian of a function f with multiple outputs. We
                  restrict our description here to the most commonly used case,
                  where f has a single output.
                  <br />
                  <img
                    src="/assets/Blogs/14-5.jpg"
                    alt="Backpropagation Illustration"
                  />
                </p>

              </div>
            </div>

        <BackButton />
      </div>
    </>
  );
}

export default DL2;
