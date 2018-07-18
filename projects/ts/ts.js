

const model = tf.sequential();

model.add(tf.layers.dense({units: 1, inputShape: [2]}));
model.add(tf.layers.dense({units: 64, inputShape: [2]}));
model.add(tf.layers.dense({units: 1, inputShape: [64]}));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Generate some synthetic data for training.
const xs = tf.tensor2d([1,1, 2,2, 2,3, 1,2], [4, 2]);
const ys = tf.tensor2d([2, 4, 5, 3], [4, 1]);

// Train the model using the data.
var res = document.getElementById("result");
var sumA = document.getElementById("sumA");
var sumB = document.getElementById("sumB");


model.fit(xs, ys, {epochs: 1000}).then(() => {
	// Use the model to do inference on a data point the model hasn't seen before:
	// Open the browser devtools to see the output
	res.value = "Done";

});

function equal(){
	var r = model.predict(tf.tensor2d([sumA.value,sumB.value], [1, 2])).dataSync();
	res.value = r[0];
	model.fit(xs, ys, {epochs: 10});
}