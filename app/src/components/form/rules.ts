export function isRomaji(value = ""): string {
  return value.match(/^[0-9a-zA-Z]*$/) ? "" : "半角英数字で入力してください。"
}

export function isRomajiWithIrregulars(value = ""): string {
  return value.match(/^[ -~]+$/) ? "" : "半角英数字記号で入力して下さい。"
}

export function isMail(value = ""): string {
  return value.match(/^[a-zA-Z0-9!$&*.=^`|~#%'+/?_{}-]+@([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,4}$/) ? "" : "メールアドレスを正しく入力してください。"
}

export function isKatakana(value = ""): string {
  return value.match(/^[ァ-ヶー]*$/) ? "全角カタカナで入力してください。" : ""
}

export function isZip(value = ""): string {
  return value.match(/^\d{3}-*\d{4}$/) ? "郵便番号を入力してください。" : ""
}

export function isTel(val: string): string {
  let message: string = "";
  if (!val || val.match(/^0\d-\d{4}-\d{4}$/)) {
    message = "電話番号を正しく入力してください";
  } else if (!val || val.match(/^0\d{3}-\d{2}-\d{4}$/)) {
    message = "電話番号を正しく入力してください";
  } else if (!val || val.match(/^\(0\d\)\d{4}-\d{4}$/)) {
    message = "電話番号を正しく入力してください";
  } else if (!val || val.match(/^\(0\d{3}\)\d{2}-\d{4}$/)) {
    message = "電話番号を正しく入力してください";
  } else if (!val || val.match(/^(070|080|090)-\d{4}-\d{4}$/)) {
    message = "電話番号を正しく入力してください";
  } else if (!val || val.match(/^050-\d{4}-\d{4}$/)) {
    message = "電話番号を正しく入力してください";
  } else if (!val || val.match(/^0120-\d{3}-\d{3}$/)) {
    message = "電話番号を正しく入力してください";
  }
  return message
}

export function isSpace(val: string): string {
  let message: string = "";
  if (val && val.match("\\s")) {
    message = "スペースなしで入力してください";
  }
  return message
}

export function isImageNone(val: string|null): string {
  return val ? "" : "画像をアップロードしてください"
}

export function isFileNone(val: string|null): string {
  return val ? "" : "種類をアップロードしてください"
}

export function isImageValid(val: number): boolean {
  return val < 1000000
}

