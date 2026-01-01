import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, FileText } from "lucide-react";

const MonzoCodePage = () => {
  const ledgerCode = `import uuid


def generate_entry_id() -> str:
    """
    generate_entry_id is a helper function provided to generate a random ID
    to use for an entry. You can assume that these are completely unique
    """
    return "entry-" + str(uuid.uuid4())


class InMemoryLedger:

    # Initialisation --------------------------------------------------
    def __init__(self):
        #list to store ledger entries
        self.entries = []
        
        

    # Top Level Operations --------------------------------------------

    def balance(self) -> int:
        
        #initial balance from entries
        total = sum(entry['amount'] for entry in self.entries)
        return total
        
        
        

    def deposit(self, amount: int) -> str:
        """
        Records a deposit in to the ledger for amount.
        Returns an unique entry ID string to identify the deposit.
        """
        unique_entry = generate_entry_id()
        self.entries.append({'entry_id': unique_entry, 'amount': amount})
        return unique_entry
        
        
        

    def withdraw(self, amount: int) -> str:
        """
        Records a withdrawal in to the ledger for amount.
        Returns an unique entry ID string to identify the withdrawal.
        """
        unique_entry = generate_entry_id()
        self.entries.append({'entry_id':unique_entry, 'amount':-amount})
        return unique_entry

    # Additional Operations -------------------------------------------

    def balance_at(self, entry_id: str) -> int:
        """
        Returns an int of the total balance at the point (and
        including) of a particular entry ID. If the specified entry ID
        does not exist in the ledger, it raises an EntryNotFoundError.
        """
        raise NotImplementedError("balance_at is not implemented")

    # Transaction Operations ------------------------------------------

    def begin(self):
        """
        Starts a transaction. Transactions can be nested.
        """
        raise NotImplementedError("begin is not implemented")

    def commit(self):
        """
        Finishes and writes (commits) all open transactions.
        If commit is called without a transaction being started,
        it raises a TransactionError.
        """
        raise NotImplementedError("commit is not implemented")

    def rollback(self):
        """
        Finishes the current active transaction but discards
        all the changes. If rollback is called without a transaction being
        started, it raises a TransactionError.
        """
        raise NotImplementedError("rollback is not implemented")


class TransactionError(BaseException):
    pass


class EntryNotFoundError(BaseException):
    pass`;

  const testCode = `import unittest
from ledger import InMemoryLedger, EntryNotFoundError, TransactionError


class TestInMemoryLedger(unittest.TestCase):
    def test_simple_deposit(self):
        """
        Goes through depositing some money and expecting
        it to be present and correct
        """
        ledger = InMemoryLedger()
        self.assertEqual(ledger.balance(), 0)

        d1 = ledger.deposit(100)
        self.assertTrue(len(d1) > 0, "entry_id was empty")
        self.assertEqual(ledger.balance(), 100)

    def test_simple_withdrawal(self):
        """
        Goes through withdrawing some money and expecting
        the balance to be reflected appropriately
        """
        ledger = InMemoryLedger()
        self.assertEqual(ledger.balance(), 0)

        w1 = ledger.withdraw(100)
        self.assertTrue(len(w1) > 0, "entry_id was empty")
        self.assertEqual(ledger.balance(), -100)

    def test_simple_balance_1(self):
        """
        Goes through a chain of making a deposit and withdrawal
        to assert that the flow works correctly
        """
        ledger = InMemoryLedger()
        self.assertEqual(ledger.balance(), 0)

        d1 = ledger.deposit(100)
        self.assertTrue(len(d1) > 0, "entry_id was empty")
        self.assertEqual(ledger.balance(), 100)

        w1 = ledger.withdraw(10)
        self.assertNotEqual(w1, d1, "entry_ids were equal")
        self.assertEqual(ledger.balance(), 90)

    def test_simple_balance_2(self):
        """
        Goes through a chain of making a withdrawal and deposit
        to assert that the flow works correctly
        """
        ledger = InMemoryLedger()
        self.assertEqual(ledger.balance(), 0)

        w1 = ledger.withdraw(10)
        self.assertTrue(len(w1) > 0, "entry_id was empty")
        self.assertEqual(ledger.balance(), -10)

        d1 = ledger.deposit(100)
        self.assertNotEqual(w1, d1, "entry_ids were equal")
        self.assertEqual(ledger.balance(), 90)

    def test_balance_at(self):
        """
        Asserts that we are correctly tracking balances between
        operations correctly, so we can retrieve balances at a point in time
        """
        ledger = InMemoryLedger()
        self.assertEqual(ledger.balance(), 0)

        d1 = ledger.deposit(100)
        self.assertEqual(ledger.balance(), 100)

        balance = ledger.balance_at(d1)
        self.assertEqual(balance, 100)

        w1 = ledger.withdraw(10)
        self.assertNotEqual(d1, w1, "entry_ids were equal")
        self.assertEqual(ledger.balance(), 90)

        balance = ledger.balance_at(d1)
        self.assertEqual(balance, 100)

        balance2 = ledger.balance_at(w1)
        self.assertEqual(balance2, 90)

    def test_balance_at_invalid_id(self):
        """
        Ensures that a bad entry ID results in an error
        """
        ledger = InMemoryLedger()
        self.assertEqual(ledger.balance(), 0)
        with self.assertRaises(EntryNotFoundError):
            ledger.balance_at("BAD_ID")

    def test_transaction_flow(self):
        """
        Goes through a simple transaction flow
        """
        ledger = InMemoryLedger()
        self.assertEqual(ledger.balance(), 0)

        # Start our transaction
        ledger.begin()

        # Make a deposit and a withdrawal
        d1 = ledger.deposit(100)
        w1 = ledger.withdraw(10)

        self.assertNotEqual(d1, w1, "entry_ids were equal")
        self.assertEqual(ledger.balance(), 90)

        # Commit our transaction
        ledger.commit()

        # Expect all of it to have been written appropriately
        self.assertEqual(ledger.balance(), 90)

        balance = ledger.balance_at(d1)
        self.assertEqual(balance, 100)

        balance2 = ledger.balance_at(w1)
        self.assertEqual(balance2, 90)

    def test_transaction_rollback(self):
        """
        Tests writing a transaction and then calling
        rollback, making sure that nothing is committed
        """
        ledger = InMemoryLedger()
        self.assertEqual(ledger.balance(), 0)

        # Start our transaction
        ledger.begin()

        # Make a deposit and a withdrawal
        d1 = ledger.deposit(100)
        w1 = ledger.withdraw(10)

        self.assertEqual(ledger.balance(), 90)
        self.assertNotEqual(w1, d1, "entry_ids were equal")

        # Rollback our transaction
        ledger.rollback()

        # Expect none of it to have been written
        self.assertEqual(ledger.balance(), 0)

        with self.assertRaises(EntryNotFoundError):
            ledger.balance_at(d1)

        with self.assertRaises(EntryNotFoundError):
            ledger.balance_at(w1)

    def test_transaction_nested(self):
        """
        Tests writing nested transactions with commit
        """
        ledger = InMemoryLedger()
        self.assertEqual(ledger.balance(), 0)

        # Start our transaction, create a deposit
        ledger.begin()
        d1 = ledger.deposit(100)

        # Create a new transaction
        ledger.begin()
        w1 = ledger.withdraw(10)
        self.assertEqual(ledger.balance(), 90)

        # Commit
        ledger.commit()

        # Expect all our data to be written
        self.assertEqual(ledger.balance(), 90)

        balance = ledger.balance_at(d1)
        self.assertEqual(balance, 100)

        balance2 = ledger.balance_at(w1)
        self.assertEqual(balance2, 90)

    def test_transaction_nested_rollback(self):
        """
        Tests writing nested transactions with a
        rollback before committing
        """
        ledger = InMemoryLedger()
        self.assertEqual(ledger.balance(), 0)

        # Start our transaction, create a deposit
        ledger.begin()
        d1 = ledger.deposit(100)

        # Create a new transaction but roll it back
        ledger.begin()
        w1 = ledger.withdraw(10)
        self.assertEqual(ledger.balance(), 90)
        ledger.rollback()

        # Expect only d1 to be written
        self.assertEqual(ledger.balance(), 100)
        balance = ledger.balance_at(d1)
        self.assertEqual(balance, 100)

        with self.assertRaises(EntryNotFoundError):
            ledger.balance_at(w1)

        # Do a commit, expect only d1 again
        ledger.commit()
        self.assertEqual(ledger.balance(), 100)
        balance = ledger.balance_at(d1)
        self.assertEqual(balance, 100)

        with self.assertRaises(EntryNotFoundError):
            ledger.balance_at(w1)

    def test_transaction_nested_full_rollback(self):
        """
        Tests writing nested transactions but
        with all transactions rolled back, we expect nothing to be written
        """
        ledger = InMemoryLedger()
        self.assertEqual(ledger.balance(), 0)

        # Start our transaction, create a deposit
        ledger.begin()
        d1 = ledger.deposit(100)

        # Create a new transaction
        ledger.begin()
        w1 = ledger.withdraw(10)

        # Now roll back both our transactions
        ledger.rollback()
        ledger.rollback()

        # We shouldn't be in a transaction, so expect an error
        self.assertEqual(ledger.balance(), 0)

        with self.assertRaises(TransactionError):
            ledger.commit()

        # Make sure we didn't write w1 or d1
        self.assertEqual(ledger.balance(), 0)

        with self.assertRaises(EntryNotFoundError):
            ledger.balance_at(d1)

        with self.assertRaises(EntryNotFoundError):
            ledger.balance_at(w1)

    def test_transaction_inactive_error(self):
        """
        Tests for appropriate errors if commit
        or rollback are called outside of a transaction
        """
        ledger = InMemoryLedger()
        self.assertEqual(ledger.balance(), 0)

        # Commit outside an active transaction should cause an error
        with self.assertRaises(TransactionError):
            ledger.commit()

        # Rollback outside an active transaction should cause an error
        with self.assertRaises(TransactionError):
            ledger.rollback()


if __name__ == '__main__':
    unittest.main()`;

  const readmeCode = `# In-Memory Ledger Challenge

This is Monzo's pair programming challenge for software engineering positions.

## Overview

You'll be working with a Monzo engineer to implement missing functionality in an InMemoryLedger class. The session is collaborative and designed to simulate real-world engineering at Monzo.

## Files

- **ledger.py** - The main implementation file containing the InMemoryLedger class
- **test_ledger.py** - Comprehensive test suite that covers all functionality
- **README.md** - This documentation file

## Task

Your task is to implement the missing methods in the InMemoryLedger class:

1. **balance_at(entry_id)** - Returns the balance at a specific point in time
2. **begin()** - Starts a transaction (with support for nesting)
3. **commit()** - Commits all open transactions
4. **rollback()** - Rolls back the current transaction

## Key Requirements

- Handle nested transactions correctly
- Raise appropriate exceptions (EntryNotFoundError, TransactionError)
- Maintain transaction isolation
- Support rollback of nested transactions

## Evaluation Criteria

- Problem-solving approach
- Code quality and readability
- Communication and collaboration
- Handling of edge cases
- Understanding of transaction concepts`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 py-8">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/company/monzo-software-engineer" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Monzo Process
              </Link>
            </Button>
            
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Monzo Pair Programming Code</h1>
                <p className="text-muted-foreground">In-Memory Ledger Implementation</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Code Files</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="ledger" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="ledger">ledger.py</TabsTrigger>
                  <TabsTrigger value="test">test_ledger.py</TabsTrigger>
                  <TabsTrigger value="readme">README.md</TabsTrigger>
                </TabsList>
                
                <TabsContent value="ledger" className="mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{ledgerCode}</code>
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="test" className="mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{testCode}</code>
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="readme" className="mt-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto whitespace-pre-wrap">
                      <code>{readmeCode}</code>
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MonzoCodePage;
