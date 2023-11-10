const byteSize = (str) => {
  // write your code here
	let totalBytes = 0;
  for (let i = 0; i < str.length; ++i) {
    const charCode = str.charCodeAt(i);
    if (charCode <= 0x7f) {
      totalBytes += 1;
    } else if (charCode <= 0x7ff) {
      totalBytes += 2;
    } else if (charCode <= 0xffff) {
      totalBytes += 3;
    } else {
      totalBytes += 4;
    }
  }
  return totalBytes;
};

function calculateSize() {
  const inputString = document.getElementById("inputString").value;
  const sizeInBytes = byteSize(inputString);

  document.getElementById(
    "result"
  ).textContent = `Size of the string : ${sizeInBytes} bytes`;
}

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
