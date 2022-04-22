import {Form} from "@/types/Form";

export default function () {
  const setColorById = (id: number): string => {
    let palette: string[] = ["#ffddd2", "#7209b7", "#560bad", "#480ca8", "#3a0ca3", "#4cc9f0",
      "#f72585", "#4895ef", "#b5179e", "#bde0fe"];
    return palette[parseInt(id.toString()[1])]
  }

  const groupBy = (items: any[], key: string): object => {
    return items.reduce(
      (result, item) => ({
        ...result,
        [item[key]]: [
          ...(result[item[key]] || []),
          item,
        ],
      }),
      {}
    )
  }

  const formatBytes = (bytes: number, decimals = 2): string | void => {
    if (bytes) {
      if (bytes === 0) return '0 Bytes';

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  }


  const sortByAsc = (list: any[], key: string | null = null) => {
    if (key) {
      return list.sort((a, b) => {
        return a[key] - b[key]
      })
    } else {
      return list.sort((a, b) => {
        return a - b
      })
    }
  }

  const sortByDesc = (list: any[], key: string | null = null) => {
    if (key) {
      return list.sort((a, b) => {
        return b[key] - a[key]
      })
    } else {
      return list.sort((a, b) => {
        return b - a
      })
    }
  }

  function dataEnsureOnFind<T>(argument: T | undefined | null, message: string = 'This value was promised to be there.'): T {
    if (argument === undefined || argument === null) {
      throw new TypeError(message);
    }

    return argument;
  }

  const copyText = (idText: string): void => {
    let input: HTMLInputElement;
    input = <HTMLInputElement>document.getElementById(idText);
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value).then(r => true);
  }

  const findAndUpdateFormElement = (form: Form[][], column: string, field: string, value: any, tab: number = 0): Form[][] => {
    form[tab].forEach(row => {
      row.elements.forEach(element => {
        if (element.db_column_name == column) {
          //@ts-ignore
          element[field] = value
        }
      })
    })

    return form
  }

  const checkPermission = (permissions: any, codeName: string): boolean => {
    const permission: any = permissions.find((item: any) => {
      return item.code_name === codeName
    })
    if (permission) return permission.active
    else return false
  }


  const daysInBetween = (start: any, end: any): Date[] => {
    let dates = []
    for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
      dates.push(new Date(dt));
    }
    return dates;
  }

  const setDateJPDateFormat = (date: Date): string => {
    const d: string = date.toISOString().substring(0, 10)
    return d.split("-")[0] + "年" + d.split("-")[1] + "月" + d.split("-")[2] + "日"
  }

  const findDaysInAYear = (day: number): Date[] => {
    const date = new Date().toISOString().substring(0, 10).split('-')
    const year = parseInt(date[0]);

    let dates: Date[] = []

    const months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    months.forEach(month => {
      const lastDayOfMonth = new Date(year, month, 0).getDate();
      for (let i = 1; i < lastDayOfMonth + 1; i++) {
        if (day === new Date(year, month - 1, i).getDay()) {
          dates.push(new Date(year, month - 1, i))
        }
      }
    })
    return dates
  }

  return {
    setColorById,
    groupBy,
    formatBytes,
    sortByAsc,
    sortByDesc,
    dataEnsureOnFind,
    copyText,
    findAndUpdateFormElement,
    checkPermission,
    daysInBetween,
    setDateJPDateFormat,
    findDaysInAYear
  }
}
