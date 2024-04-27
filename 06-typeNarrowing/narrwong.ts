function detectTyes(val: number | string) {
  if (typeof val === "string") {
    val.toLowerCase();
  }

  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("please provide the ID");
  }

  id.toLowerCase();
}
