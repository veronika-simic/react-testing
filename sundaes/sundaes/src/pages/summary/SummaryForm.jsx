import {useState} from 'react';

export default function SummaryForm() {
    const [checked, setChecked] = useState(false)

  return (
    <div>
      <form>
        <input
          type="checkbox"
          id="terms-and-conditions"
          name="terms-and-conditions"
          value="agree"
          checked={checked}
          onChange={(e) =>  setChecked(e.target.checked)}
        />
        <label htmlFor="terms-and-conditions">
          I agree to Terms and Conditions
        </label>

        <button disabled={!checked}>Confirm order</button>
      </form>
    </div>
  );
}
