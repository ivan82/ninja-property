# ninjaproperty
Creates, extracts or sets the object property value by providing a path.

# Example

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Property</title>
</head>
<body>

<script src="ninja-property.js"></script>

<script>
var obj = { a : 1, b : {c: 2} };
console.log(NinjaProperty.value(obj, 'b.c'));

NinjaProperty.valueObjectByPathArray(obj, 'd', {e: 4});
console.log(NinjaProperty.value(obj, 'd.e'));
</script>

</body>
</html>
```
