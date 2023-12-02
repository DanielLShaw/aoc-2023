import { Input, Form, Button, Space, Typography, Statistic } from "antd";
import { useState, useCallback, useEffect } from "react";
import getLines from "../../../utils/string.utils";
import { input } from "./input";
export default function Day1() {
  const [part1, setPart1] = useState<number>();
  const [part2, setPart2] = useState<number>();

  const [form] = Form.useForm<{ input: string }>();
  const values = Form.useWatch([], form);

  const getDay1Solution = useCallback(() => {
    const lines = getLines(values.input);
    const answers = lines.map((line) => {
      const numbersRegex = new RegExp("\\d", "g");
      const matches = [...line.matchAll(numbersRegex)];
      const firstNumber = matches?.[0]?.[0];
      const lastNumber = matches?.[matches?.length - 1]?.[0];
      const answerString = `${firstNumber}${lastNumber}`;
      return +answerString;
    });
    const answer = answers?.reduce((toAdd, running) => (running += toAdd));
    setPart1(answer);
  }, [values]);

  const convertStringToNumber = (string: string) => {
    const parsed = Number(string);
    if (Number.isInteger(parsed)) {
      return parsed; // already a number
    } else {
      const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ];
      const index = numbers.findIndex((number) => number === string);
      return index;
    }
  };

  const getDay2Solution = useCallback(() => {
    const lines = getLines(values.input);
    const answers = lines.map((line) => {
      const numbersRegex = new RegExp(
        "(?=(\\d|one|two|three|four|five|six|seven|eight|nine))",
        "g"
      ); // able to match eighthree (83). without pos lookahead only 8 is matched
      const matches = [...line.matchAll(numbersRegex)];
      const firstNumber = matches?.[0]?.[1];
      const lastNumber = matches?.[matches?.length - 1]?.[1];
      const answerString = `${convertStringToNumber(
        firstNumber
      )}${convertStringToNumber(lastNumber)}`;
      return +answerString;
    });
    const answer = answers?.reduce((toAdd, running) => (running += toAdd));
    setPart2(answer);
  }, [values]);

  const handleGetSoltutions = useCallback(() => {
    getDay1Solution();
    getDay2Solution();
  }, [getDay1Solution, getDay2Solution]);

  return (
    <div>
      <Typography.Title level={2}>Part 1</Typography.Title>
      <p>
        The newly-improved calibration document consists of lines of text; each
        line originally contained a specific calibration value that the Elves
        now need to recover. On each line, the calibration value can be found by
        combining the first digit and the last digit (in that order) to form a
        single two-digit number. <br />
        <br /> For example: 1abc2 pqr3stu8vwx a1b2c3d4e5f treb7uchet
        <br /> In this example, the calibration values of these four lines are
        12, 38, 15, and 77. <br />
        <br />
        Adding these together produces 142. Consider your entire calibration
        document. What is the sum of all of the calibration values?
      </p>

      <Typography.Title level={2}>Part 2</Typography.Title>

      <p>
        Your calculation isn't quite right. It looks like some of the digits are
        actually spelled out with letters: one, two, three, four, five, six,
        seven, eight, and nine also count as valid "digits".
      </p>

      <Form form={form} layout="vertical" initialValues={{ input }}>
        <Form.Item name="input" label="Calibration Document">
          <Input.TextArea />
        </Form.Item>
        <Space>
          <Button
            type="primary"
            onClick={handleGetSoltutions}
            disabled={!values?.input}
          >
            Get Solutions
          </Button>
          <Statistic title="Part 1 Answer" value={part1} />
          <Statistic title="Part 2 Answer" value={part2} />
        </Space>
      </Form>
    </div>
  );
}
