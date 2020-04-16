module.exports = function arrayPrevious(array, currentItem) {
	var len = array.length
	var newIndex = array.indexOf(currentItem) - 1
	if (newIndex < 0) newIndex = len - 1
	return array[newIndex]
}
