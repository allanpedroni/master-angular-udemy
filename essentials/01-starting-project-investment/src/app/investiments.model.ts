
export type InvestmentResult = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};

export type InvestmentInput = {
  initialInvestment: number
  annualInvestment: number
  expectedReturn: number
  duration: number
}

