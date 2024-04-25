abstract class TakePhoto {
  constructor(public cemaraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //calculation
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cemaraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cemaraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}
