const calculatePAYE = (basicSalary) => {
    const taxBands = [
      { band: 24000, rate: 10/100 },
      { band: 16000, rate: 15/100 },
      { band: 16000, rate: 20/100 },
      { band: 56000, rate: 25/100 },
      { band: Infinity, rate: 30/100 }
    ];
  
    let tax = 0;
    let remainingSalary = basicSalary;
  
    for (const band of taxBands) {
      if (remainingSalary <= 0) {
        break;
      }
      const taxableAmount = Math.min(remainingSalary, band.band);
      tax += taxableAmount * band.rate;
      remainingSalary -= taxableAmount;
    }
  
    return tax;
  };
  
  const calculateNHIFDeductions = (basicSalary) => {
    const nhifBands = [
      { band: 5999, rate: 150 },
      { band: 7999, rate: 300 },
      { band: 11999, rate: 400 },
      { band: 14999, rate: 500 },
      { band: 19999, rate: 600 },
      { band: 24999, rate: 750 },
      { band: 29999, rate: 850 },
      { band: 34999, rate: 900 },
      { band: 39999, rate: 1000 },
      { band: 44999, rate: 1100 },
      { band: 49999, rate: 1200 },
      { band: 59999, rate: 1300 },
      { band: 69999, rate: 1400 },
      { band: 79999, rate: 1500 },
      { band: 89999, rate: 1600 },
      { band: 99999, rate: 1700 },
      { band: Infinity, rate: 1800 }
    ];
  
    let nhifRate = 0;
    for (const band of nhifBands) {
      if (basicSalary <= band.band) {
        nhifRate = band.rate;
        break;
      }
    }
  
    return nhifRate;
  };
  
  const calculateNSSF = (basicSalary) => {
    const nssfRate = 0.06; // 6% of basic salary
    return basicSalary * nssfRate;
  };
  
  const calculateNetSalary = (basicSalary, benefits) => {
    const tax = calculatePAYE(basicSalary);
    const nhif = calculateNHIFDeductions(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    
    const grossSalary = basicSalary + benefits;
    const deductions = tax + nhif + nssf;
    const netSalary = grossSalary - deductions;
  
    return {
      grossSalary,
      deductions: {
        tax,
        nhif,
        nssf
      },
      netSalary
    };
  };
  
 
  