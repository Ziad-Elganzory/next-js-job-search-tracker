import connectDB from "./db";
import { Board, Column } from "./models";
import column from "./models/column";
import jobApplication from "./models/job-application";

const DEFAULT_COLUMNS = [
  { name: "Wish List", order: 0 },
  { name: "Applied", order: 1 },
  { name: "Interviewing", order: 2 },
  { name: "Offers", order: 3 },
  { name: "Rejected", order: 4 },
];

export async function initializeUserBoard(userId: string) {
  try {
    await connectDB();
    // Check if the user already has a board
    const existingBoard = await Board.findOne({ userId, name: "Job Hunt" });
    if (existingBoard) {
      return existingBoard;
    }

    // Create a new board for the user
    const board = await Board.create({
      name: "Job Hunt",
      userId,
      columns: [],
    });

    // Create default columns for the new board

    const columns = await Promise.all(
      DEFAULT_COLUMNS.map((col) =>
        Column.create({
          name: col.name,
          order: col.order,
          boardId: board._id,
          jobApplication: []
        }),
      ),
    );

    // Update the board with the created columns

    board.columns = columns.map((col) => col._id);
    await board.save();

    return board;
  } catch (error) {
    throw error;
  }
}
